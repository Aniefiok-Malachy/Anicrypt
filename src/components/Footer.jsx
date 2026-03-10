import Container from "./Container.jsx";
import { site } from "../data.js";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <Container className="py-8">
        <p className="text-sm text-slate-800">{site.footer}</p>
      </Container>
    </footer>
  );
}