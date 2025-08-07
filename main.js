const projects = [
  {
    title: "Explainer Animation for FinTech",
    description: "A motion graphic explainer created in After Effects for a FinTech startup. Focused on visual storytelling with clean transitions and icon animation.",
    videoLink: "https://www.youtube.com/embed/your_video_id"
  },
  {
    title: "Product Teaser Animation",
    description: "30-second promotional teaser created in Blender and After Effects. Used 3D product modeling and sleek motion design.",
    videoLink: "https://www.youtube.com/embed/your_other_video_id"
  },
  {
    title: "Logo Animation Reel",
    description: "A collection of animated logos designed for clients in tech, fashion, and education industries.",
    videoLink: "https://www.youtube.com/embed/your_reel_id"
  }
];

const container = document.getElementById("projects");

projects.forEach((project) => {
  const div = document.createElement("div");
  div.className = "p-4 border rounded-2xl shadow space-y-2";

  const title = document.createElement("h3");
  title.className = "text-xl font-bold";
  title.textContent = project.title;

  const desc = document.createElement("p");
  desc.className = "text-sm";
  desc.textContent = project.description;

  const iframe = document.createElement("iframe");
  iframe.src = project.videoLink;
  iframe.className = "w-full h-60 rounded-lg";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.frameBorder = "0";

  div.appendChild(title);
  div.appendChild(desc);
  div.appendChild(iframe);
  container.appendChild(div);
});
