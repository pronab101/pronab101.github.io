const projects = [
  {
    title: "Mobile App Motion Graphics",
    description: "Motion graphics video created for a mobile app showcasing UI animations and transitions. Designed using After Effects.",
    videoLink: "https://www.youtube.com/embed/_fpWm4MeNwI"
  },
  {
    title: "Product Teaser Animation",
    description: "Promotional teaser created in Blender and After Effects. Used 3D product modeling and sleek motion design.",
    videoLink: "https://www.youtube.com/watch?v=QxYLPgJIxHA"
  },
  {
    title: "Logo Animation Reel",
    description: "A collection of animated logos designed for clients in tech, fashion, and education industries.",
    videoLink: "https://www.youtube.com/watch?v=Mz2cOFDB0DI"
  },
  {
    title: "Lead Academy – Training Advertisement",
    description: "Promotional motion graphics video created for Lead Academy to advertise their training programs.",
    videoLink: "https://www.youtube.com/embed/ZrvNokqoDXI"
  },
  {
    title: "Jewellery Gold Price Calculator – App Tutorial",
    description: "Tutorial showing how to use the Jewellery Gold Price Calculator Android app to compute gold prices based on weight and purity using real-time data.",
    videoLink: "https://www.youtube.com/embed/cLHP_NzeS-k"
  },
  {
  title: "Personal Logo Animation",
  description: "An 8-second animated logo reveal that reflects my motion design style and personal brand. Created using Veo and After Effects for sound and polish.",
  videoLink: "https://www.youtube.com/watch?v=dhey3JSlP8w"
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
