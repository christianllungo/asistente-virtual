import { useState } from 'react';
import { OpenaiAPI } from './api/openai.api';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import NoteIcon from '@mui/icons-material/Note';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [openaiResults, setOpenaiResults] = useState("¡Hola herman@s biblic@s! Soy el asistente virtual del grupo y he sido programado para ayudarles en lo que necesiten en nuestra comunidad online. Espero ser de gran ayuda en todo lo que necesiten y estaré a disposición para colaborar en lo que sea posible. Que tengan todos una excelente semana.");
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.length === 0) {
      return;
    } else {
      setLoading(true);
      async function ProcessOpenaiResults() {
        const result = await OpenaiAPI.getOpenaiResults(inputText);
        setOpenaiResults(result);
        setLoading(false);
      }
      ProcessOpenaiResults();
      setInputText("");
    }
  }

  return (
    <>
      <Container>
        <Paper elevation={3} sx={{margin: '24px 0', padding: 2}}>
          <Box sx={{paddingTop: 2}}>
            <Typography variant='h5'>
              ¿En qué le puedo ayudar?
            </Typography>
          </Box>
          <form onSubmit={handleSubmit} className="main-form">
            <TextField id="standard-basic" label="Escribe tu pregunta Aquí" variant="standard" onChange={handleChange} value={inputText} />
            {/* <input placeholder='Escribe aqui' onChange={handleChange} value={inputText}></input> */}
            <br/>
            {
              loading ? (
                <CircularProgress sx={{marginTop: 3}}/>
              ) : (
                <Button type="submit" variant="contained" sx={{marginTop: 3}}>
                  Preguntar
                </Button>
              )
            }
            <br/>
          </form>
          <div className='result-container'>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Avatar alt="Profile picture" src='/images/bunny-avatar.jpg' />
              <Typography variant='body1' sx={{marginLeft: '4px'}}>
                Asistente Virtual:
              </Typography>
            </Box>
            <Box sx={{marginTop: 1, padding: 2, border: '2px solid #C4C4C4', borderRadius: '4px'}}>
              {
                loading ? (
                  "generando respuesta..."
                ) : (
                  openaiResults
                )
              }
              </Box>
          </div>
          <Divider />
          <Typography variant='h6' sx={{margin: 2, marginTop: 4}}>
            Ejemplos de uso
          </Typography>
          <div className='use-cases-container'>
            <div>
              <NoteIcon fontSize='large'/>
              <Typography variant='subtitle1'>Idea/Sugerencia</Typography>
              <ul>
                <li><Typography variant='subtitle2'>- Podemos hacer devocionales cada semana y que alguien los escriba en el grupo de Whatsapp</Typography></li>
                <li><Typography variant='subtitle2'>- Deberíamos tener un límite máximo de personas en una misma reunión</Typography></li>
              </ul>
            </div>
            <div>
              <MenuBookIcon fontSize='large'/>
              <Typography variant='subtitle1'>Información</Typography>
              <ul>
                <li><Typography variant='subtitle2'>- ¿De qué trata este grupo?</Typography></li>
                <li><Typography variant='subtitle2'>- ¿Ustedes hablan la sana doctrina?</Typography></li>
              </ul>
            </div>
            <div>
              <SearchIcon fontSize='large'/>
              <Typography variant='subtitle1'>Búsqueda Experimental</Typography>
              <ul>
                <li><Typography variant='subtitle2'>- ¿Qué opinas sobre los sermones online en la iglesia contemporanea?</Typography></li>
              </ul>
            </div>
          </div>
          <Divider />
          <Typography variant='h6' sx={{margin: 2, marginTop: 4}}>
            Notas Importantes
          </Typography>
          <ul className='important-notes-container'>
            <li><Typography variant='body2'>- Por ahora, el objetivo de esta página es ver qué tan útil puede ser el asistente virtual.</Typography></li>
            <li><Typography variant='body2'>- Si encuentras una respuesta que es muy mala, favor de tomar foto o screenshot y compartir.</Typography></li>
            <li><Typography variant='body2'>- No compartas información privada como tu nombre completo, dirección, número de tarjeta de crédito, etc.</Typography></li>
            <li><Typography variant='body2'>- Este programa no puede recordar lo que le dijiste anteriormente. Para el programa cada pregunta es nueva e independiente.</Typography></li>
          </ul>
        </Paper>
      </Container>
    </>
  );
}

export default App;
