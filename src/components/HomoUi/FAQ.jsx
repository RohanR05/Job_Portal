import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How can I apply for an internship?",
      answer:
        "You can apply directly through the job details page. Make sure you are logged in and your profile is complete before applying.",
    },
    {
      question: "Is InternBangla free to use?",
      answer:
        "Yes! Our platform is completely free for students and interns. Companies may have premium listing options.",
    },
    {
      question: "Can I track my application status?",
      answer:
        "Yes. After applying, you can view your dashboard to track all your active applications in real-time.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-2">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Frequently Asked <span className="text-secondary">Questions</span>
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-plus bg-accent/10 border border-primary/10 rounded-xl"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-lg font-medium text-secondary">
              {faq.question}
            </div>
            <div className="collapse-content text-neutral/80">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
