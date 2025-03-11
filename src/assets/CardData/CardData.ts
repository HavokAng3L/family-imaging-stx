import { CardObject } from "../../types/types";

// 3.8.2025: Add field to CardObject to contain location of images.
export const CardData: Array<CardObject> = [
  {
    title: "MRI",
    body: [
      "10-15 Minute Scans.",
      "Utilizing cutting-edge AI Technology for a significant improvement in accuracy.",
    ],
    imageUrl: "src/assets/images/MRI.jpg",
  },
  {
    title: "X-Ray",
    body: ["General Chest", "Abdomen", "Pelvis", "Musculoskeletal"],
    imageUrl: "src/assets/images/XRAY.jpg",
  },
  {
    title: "CT (Coming Soon)",
    body: [
      "Orthopedics",
      "Angiography",
      "Head",
      "Chest",
      "Abdominal",
      "Cardiac Calcium Scoring",
    ],
    imageUrl: "src/assets/images/CT_NEW.jpg",
  },
  {
    title: "Ultrasound",
    body: [
      "Echocardiography",
      "Vascular",
      "General Abdominal",
      "Soft Tissue Study",
    ],
    imageUrl: "src/assets/images/ULTRASOUND.jpg",
  },
];
