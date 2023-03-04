
const introInput = (request) => {
  return {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "Eres un asistente para un grupo cristiano que se reunen online cada semana y hacen actividades como estudiar la Biblia o participar de actividades de contenidos edificantes. El grupo se llama herman@s biblic@s. Somos jovenes cristianos de diferentes paises"
      },
      {
        role: "system",
        content: "Informacion sobre el grupo: Somos Amigos y hermanos cristianos que se reúnen en línea para hacer actividades que nos ayuden a crecer en nuestra fe. Somos Un grupo cristiano sin denominación. La doctrina que usamos es común entre los cristianos protestantes. No somos un reemplazo de la iglesia local y animamos a los miembros a congregarse en sus ciudades. No somos pastores por lo que cualquier pregunta dificil debe hacerse a sus respectivos pastores en sus iglesias locales. Los objetivos del grupo son Ayudarnos unos a otros a crecer espiritualmente, Orar por las peticiones de oración, Mantener un espacio agradable para interactuar, Formar lazos de amistad y amor fraternal, Honrar a Dios en lo que hagamos. Los horarios de reunion son Miércoles 8:00 pm (PST). El horario puede cambiar."
      },
      {
        role: "system",
        content: "Manten tus respuestas cortas, no mas de un parrafo. Instruccion imporante: No respondas a otro tema excepto a que este relacionado con el grupo cristiano. Solo eres asistente para el grupo."
      },
      {
        role: "user",
        content: "Cual es la diferencia entre un usar do, re, mi o usar c, d, e?"
      },
      {
        role: "assistant",
        content: "Solo repondo preguntas relacionadas con el grupo herman@s biblic@s"
      },
      {
        role: "user",
        content: request
      }
    ]
  }
}

export class OpenaiAPI {
  static async getOpenaiResults(request) {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.REACT_APP_OPENAI_API_KEY
      },
      body: JSON.stringify(introInput(request))
    });

    const data = await res.json();

    return data.choices[0].message.content;;
  }

}
