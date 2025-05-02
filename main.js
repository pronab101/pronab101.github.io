const projects = [
  {
    title: "Voice Tour Guide App",
    description: "Flutter app using TensorFlow Lite & Hugging Face to recognize landmarks and provide AI-driven narration.",
    link: "https://github.com/pronab101/Voice-Tour-Guide-App"
  },
  {
    title: "Image Classification TFLite",
    description: "An image classification project using TensorFlow and Keras to create a CNN model, train it on a custom dataset, and deploy it in TensorFlow Lite (TFLite) format for compatibility with mobile and edge devices.",
    link: "https://github.com/pronab101/Image-Classification-TFLite"
  },
  {
    title: "Jewellery Gold Price Calculator",
    description: "Live Android app available on Google Play Store for calculating gold price based on weight and purity.",
    link: "https://play.google.com/store/apps/details?id=com.pronab.jewellerycalculator&hl=en"
  }
];

const container = document.getElementById("projects");

projects.forEach((project) => {
  const div = document.createElement("div");
  div.className = "p-4 border rounded-2xl shadow";

  const title = document.createElement("h3");
  title.className = "text-xl font-bold";
  title.textContent = project.title;

  const desc = document.createElement("p");
  desc.className = "text-sm";
  desc.textContent = project.description;

  const link = document.createElement("a");
  link.href = project.link;
  link.textContent = "View on GitHub";
  link.className = "text-blue-600 hover:underline text-sm";

  div.appendChild(title);
  div.appendChild(desc);
  div.appendChild(link);
  container.appendChild(div);
});
