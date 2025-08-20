import styles from "./FloatingCallButton.module.css";
import { Phone } from "lucide-react";
import { telLink } from "@/lib/contactLinks";

const RAW_E164 = "+1 (959) 250-8598";
const TEL_URL = telLink(RAW_E164);

const FloatingCallButton = () => (
  <a
    href={TEL_URL}
    aria-label="Call us"
    role="link"
    className={styles.fab}
    data-automation="call-fab"
  >
    <Phone />
  </a>
);

export default FloatingCallButton;
