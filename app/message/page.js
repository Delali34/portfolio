"use client";
import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [messages, setMessages] = useState([
    { text: "Hi there! What's your name?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [currentStep, setCurrentStep] = useState("name");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() && currentStep !== "confirm") return;

    if (currentStep !== "confirm") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }

    switch (currentStep) {
      case "name":
        setFormData({ ...formData, name: input });
        setMessages((prev) => [
          ...prev,
          { text: "Great! What's your email address?", sender: "bot" },
        ]);
        setCurrentStep("email");
        break;
      case "email":
        if (isValidEmail(input)) {
          setFormData({ ...formData, email: input });
          setMessages((prev) => [
            ...prev,
            {
              text: "Excellent! What message would you like to send?",
              sender: "bot",
            },
          ]);
          setCurrentStep("message");
        } else {
          setMessages((prev) => [
            ...prev,
            {
              text: "That doesn't look like a valid email. Can you please enter a valid email address?",
              sender: "bot",
            },
          ]);
        }
        break;
      case "message":
        setFormData({ ...formData, message: input });
        setMessages((prev) => [
          ...prev,
          {
            text: "Thank you! Click 'Confirm' to submit your message.",
            sender: "bot",
          },
        ]);
        setCurrentStep("confirm");
        break;
      case "confirm":
        try {
          await emailjs.send(
            "service_mo1be1b",
            "template_9u8lcyi",
            { ...formData },
            "9e-dDk8AcnnCTTCUv"
          );
          setMessages((prev) => [
            ...prev,
            { text: "I have received your message. Thank you!", sender: "bot" },
          ]);
          setCurrentStep("done");
        } catch (error) {
          setMessages((prev) => [
            ...prev,
            {
              text: "Sorry, there was an error sending your message. Please try again.",
              sender: "bot",
            },
          ]);
        }
        break;
    }
  };

  return (
    <div className="flex flex-col h-[80vh] w-full md:max-w-md max-w-xs bg-[#0e171c] mx-auto background-image  rounded-lg overflow-hidden shadow-xl">
      <div className="bg-[#5cc38f] text-black p-4">
        <h2 className="md:text-xl text-sm font-bold">Chat with Me</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`my-2 p-2 md:text-[16px] text-[13px] rounded-lg max-w-[80%] ${
              message.sender === "user"
                ? "ml-auto bg-[#5cc38f]"
                : "mr-auto bg-gray-100"
            }`}
          >
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 ">
        <div className="flex items-center">
          {currentStep !== "confirm" && (
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 text-xs border rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#5cc38f]"
              disabled={currentStep === "done"}
            />
          )}
          <button
            type="submit"
            className={`bg-[#5cc38f] text-black p-2 ${
              currentStep !== "confirm" ? "rounded-r-lg" : "rounded-lg w-full"
            } hover:bg-[#5cc38f] focus:outline-none focus:ring-1 focus:ring-[#5cc38f] disabled:bg-gray-300`}
            disabled={currentStep === "done"}
          >
            {currentStep === "confirm" ? "Confirm" : <FaPaperPlane />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
