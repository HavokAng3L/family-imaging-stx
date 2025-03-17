import { CardObject } from "../../types/types";

import MRI from "src/assets/images/MRI.jpg";
import XRAY from "src/assets/images/XRAY.jpg";
import CT from "src/assets/images/CT_NEW.jpg";
import ULTRA from "src/assets/images/ULTRASOUND.jpg";

// 3.8.2025: Add field to CardObject to contain location of images.
export const ServicesData: Array<CardObject> = [
  {
    title: "MRI",
    body: [
      "10-15 Minute Scans.",
      "Utilizing cutting-edge AI Technology for a significant improvement in accuracy.",
      "Entertaining and Comforting MRI Experience with in-bore cinema (UX Platform)."
    ],
    imageUrl: MRI,
  },
  {
    title: "X-Ray",
    body: ["General Chest", "Abdomen", "Pelvis", "Musculoskeletal"],
    imageUrl: XRAY,
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
    imageUrl: CT,
  },
  {
    title: "Ultrasound",
    body: [
      "Echocardiography",
      "Vascular",
      "General Abdominal",
      "Soft Tissue Study",
    ],
    imageUrl: ULTRA,
  },
];
