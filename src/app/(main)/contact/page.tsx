"use client";
import Alert from "@/components/Alert";
import Spinner from "@/components/Spinner";
import { supabase } from "@/lib/supabase";
import { SendHorizonal } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string>(
    "Something went wrong. Please try again later.",
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase.from("contact_data").insert([
      {
        name,
        email,
        message,
      },
    ]);

    if (error) {
      setStatus("error");
      if (
        error.message.includes("duplicate key value violates unique constraint")
      ) {
        setErrorMsg(
          "It seems like you have already submitted a message. I will get back to you as soon as possible!",
        );
      }
      return;
    } else {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <form className="mt-10" onSubmit={handleSubmit}>
      {status === "success" && (
        <Alert
          message="Thanks for reaching out! I’ll reply as soon as possible."
          success
        />
      )}
      {status === "error" && <Alert message={errorMsg} />}
      <h1 className="md:text-2xl text-xl">contact me.</h1>
      {status === "loading" && (
        <div className="flex justify-center items-center my-20">
          <Spinner />
        </div>
      )}
      {(status === "idle" || status === "success" || status === "error") && (
        <>
          <div className="flex gap-2 mt-8 w-full">
            <input
              className="border border-zhen-highlight px-3 py-1 w-full rounded-sm focus:ring-1 focus:ring-foreground focus:outline-none"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="border border-zhen-highlight px-3 py-1 w-full rounded-sm focus:ring-1 focus:ring-foreground focus:outline-none"
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            className="border border-zhen-highlight px-3 py-1 w-full rounded-sm mt-8 resize-none focus:ring-1 focus:ring-foreground focus:outline-none"
            placeholder="Message"
            required
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-foreground text-background w-full mt-8 rounded-sm py-1 hover:bg-foreground/80 transition-colors duration-200 flex justify-center gap-2 items-center text-sm mb-1"
          >
            Send Message
            <SendHorizonal strokeWidth={1.5} size={16} />
          </button>
          <small className="text-foreground/75 text-xs">
            By submitting this form, I agree to the{" "}
            <Link
              href={"/privacy"}
              className="font-bold text-foreground/30 hover:text-foreground"
            >
              privacy policy.
            </Link>
          </small>
        </>
      )}
    </form>
  );
}
