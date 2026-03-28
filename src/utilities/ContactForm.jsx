import { useState } from "react";
import styled, { keyframes } from "styled-components";

const SUPABASE_URL = "https://qvdacjsavkxikakbqqjl.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2ZGFjanNhdmt4aWtha2JxcWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MTc0OTgsImV4cCI6MjA5MDI5MzQ5OH0.sYhUgj_EFucRiCkEuM3sa933USBNAagi83014LBbIo0";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Card = styled.div`
  background: #ead9bc;
  border: 1px solid rgba(44, 26, 14, 0.12);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CardLabel = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #a6782a;
  margin: 0;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const Label = styled.label`
  font-family: "DM Sans", sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #a6782a;
`;

const inputBase = `
  font-family: "DM Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  color: #2c1a0e;
  background: #f5edd8;
  border: 1.5px solid rgba(44, 26, 14, 0.15);
  padding: 0.75rem 1rem;
  outline: none;
  transition: border-color 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(44, 26, 14, 0.3);
  }

  &:focus {
    border-color: #c8963e;
  }
`;

const Input = styled.input`
  ${inputBase}
`;

const Textarea = styled.textarea`
  ${inputBase}
  resize: vertical;
  min-height: 130px;
  line-height: 1.7;
`;

const SendBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: #2c1a0e;
  color: #f5edd8;
  font-family: "DM Sans", sans-serif;
  font-size: 0.78rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1.5px solid #2c1a0e;
  cursor: pointer;
  transition:
    background 0.22s ease,
    color 0.22s ease,
    border-color 0.22s ease;

  &:hover:not(:disabled) {
    background: #c8963e;
    border-color: #c8963e;
    color: #2c1a0e;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: 0.78rem;
  font-weight: 300;
  color: #b85c3a;
  margin: 0;
`;

const SuccessMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem 1rem;
  text-align: center;
  animation: ${fadeIn} 0.4s ease forwards;
`;

const SuccessIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(200, 150, 62, 0.12);
  border: 1.5px solid #c8963e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #c8963e;
`;

const SuccessText = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: #2c1a0e;
  margin: 0;
`;

const SuccessSub = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: 0.8rem;
  font-weight: 300;
  color: #8a6a3a;
  margin: 0;
`;

export default function ContactForm() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async () => {
    if (!form.email || !form.message) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          email: form.email,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSent(true);
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isValid = form.email.trim() && form.message.trim();

  return (
    <Card>
      <CardLabel>Send a Message</CardLabel>

      {sent ? (
        <SuccessMsg>
          <SuccessIcon>✓</SuccessIcon>
          <SuccessText>Message received!</SuccessText>
          <SuccessSub>
            Thanks for reaching out — I'll get back to you soon.
          </SuccessSub>
        </SuccessMsg>
      ) : (
        <>
          <FieldGroup>
            <Label htmlFor="email">Your Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="What's on your mind?"
              value={form.message}
              onChange={handleChange}
            />
          </FieldGroup>

          {error && <ErrorMsg>{error}</ErrorMsg>}

          <SendBtn onClick={handleSubmit} disabled={!isValid || loading}>
            {loading ? "Sending..." : "Send Message →"}
          </SendBtn>
        </>
      )}
    </Card>
  );
}
