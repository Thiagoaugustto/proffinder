import React from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import TeacherItem from "../../components/TeacherItem";

import './styles.css';

function TeacherList() {
  const teacher = {
    id: 1,
    avatar: 'https://avatars.githubusercontent.com/u/46959139?v=4',
    bio: 'Entusiasta das melhores tecnologias de química avançada.',
    cost: 20,
    name: 'Thiago Augusto',
    subject: 'Química',
    whatsapp: '9999999999'
  };

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffinders disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Input name="week_day" label="Dia da semana" />
          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem teacher={teacher} />
      </main>
    </div>
  )
}

export default TeacherList;