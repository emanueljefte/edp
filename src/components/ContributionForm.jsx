import { useContext, useState} from "react";
import { ThemeContext} from "../theme/ThemeContext";
import { SendOutlined} from "@ant-design/icons";

export default function ContributionForm () {
  const { isDarkMode} = useContext(ThemeContext);
  const [form, setForm] = useState({
    title: "",
    description: "",
    tag: "",
    author: "",
});

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contribuição enviada:", form);
    setForm({ title: "", description: "", tag: "", author: ""});
};

  const sectionClass = isDarkMode? "section-dark": "section-light";

  return (
    <section className={`py-16 px-6 md:px-18 transition-colors duration-300 ${sectionClass}`}>
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-10 ${isDarkMode? "title-gradient": ""}`}>
        Contribua com a Comunidade
      </h2>

      <form onSubmit={handleSubmit} className={` max-w-2xl mx-auto p-8 rounded-lg shadow-lg space-y-6 border ${
          isDarkMode ? "border-red-500" : "border-[#333333]/50"
        } bg-inherit text-inherit`}>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Título do bug ou projeto"
          className="form-field"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Descreva o erro, solução ou ideia"
          rows="5"
          className="form-field"
          required
        />
        <input
          type="text"
          name="tag"
          value={form.tag}
          onChange={handleChange}
          placeholder="Linguagem ou tecnologia (#React, #Python...)"
          className="form-field"
        />
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Seu nome ou apelido"
          className="form-field"
        />
        <button type="submit" className="section-button flex items-center justify-center gap-2">
          <SendOutlined />
          Enviar Contribuição
        </button>
      </form>
    </section>
);
};