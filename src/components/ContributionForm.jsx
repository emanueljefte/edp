import { SendOutlined} from '@ant-design/icons';
import { useState} from 'react';

const ContributionForm = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    tag: '',
    author: '',
});

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contribuição enviada:', form);
    // Aqui você pode integrar com backend ou Firebase
    setForm({ title: '', description: '', tag: '', author: ''});
};

  return (
    <section className="bg-[#0F0F0F] text-white py-16 px-6 md:px-18">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        Contribua com a Comunidade
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-[#1A1A1A] p-8 rounded-lg shadow-lg space-y-6"
>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Título do bug ou projeto"
          className="w-full p-3 rounded bg-[#0F0F0F] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-orange-500"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Descreva o erro, solução ou ideia"
          rows="5"
          className="w-full p-3 rounded bg-[#0F0F0F] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-orange-500"
          required
        />
        <input
          type="text"
          name="tag"
          value={form.tag}
          onChange={handleChange}
          placeholder="Linguagem ou tecnologia (#React, #Python...)"
          className="w-full p-3 rounded bg-[#0F0F0F] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-orange-500"
        />
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Seu nome ou apelido"
          className="w-full p-3 rounded bg-[#0F0F0F] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-orange-500"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-black text-xl font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-transform"
>
          <SendOutlined />
          Enviar Contribuição
        </button>
      </form>
    </section>
);
};

export default ContributionForm;