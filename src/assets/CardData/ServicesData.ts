import { CardObject } from "../../types/types";

// 3.8.2025: Add field to CardObject to contain location of images.
export const ServicesData: Array<CardObject> = [
  {
    title: "MRI",
    body: [
      [
        "10-15 Minute Scans.",
        "Cutting-edge AI Technology",
        "Entertaining MRI Experience with In-Bore Cinema.",
      ],
    ],
    imageUrl: "images/MRI.jpg",
  },
  {
    title: "X-Ray",
    body: [["General Chest", "Abdomen", "Pelvis", "Musculoskeletal"]],
    imageUrl: "images/XRAY.webp",
  },
  {
    title: "Ultrasound",
    body: [
      [
        "Echocardiography",
        "Vascular",
        "General Abdominal",
        "Soft Tissue Study",
      ],
    ],
    imageUrl: "images/ULTRASOUND.jpg",
  },
  {
    title: "CT (Coming Soon)",
    body: [
      [
        "Orthopedics",
        "Angiography",
        "Head",
        "Chest",
        "Abdominal",
        "Cardiac Calcium Scoring",
      ],
    ],
    imageUrl: "images/CT.jpg",
  },
];
