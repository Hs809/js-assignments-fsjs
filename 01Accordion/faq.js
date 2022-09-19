const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators."
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses"
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!"
  }
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq() {
  faqData.map((faqText) => {
    return createFaq(faqText);
  });
}
showFaq();

function createFaq(faqText) {
  console.log(faqText);

  const faq = document.createElement("div");
  faq.classList.add(".faq");
  faq.innerText = faqText;
  accordianBody.appendChild(faq);
}

function btnStatusUpdate() {}
