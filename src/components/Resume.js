import React, { Component } from 'react';
import { Grid, Cell, ListItem, ListItemContent, List } from 'react-mdl';
import styled from '@emotion/styled'; 
import Education from './layout/education';
import Experience from './layout/experience';
import Navbar from './Navbar';
import foto from '../images/foto-pri-300x300.png';
import Avatar from '@material-ui/core/Avatar';
import reactImg from '../images/skills/react.png';
import bootstrapImg from '../images/skills/bootstrap.png';
import gitImg from '../images/skills/git.png';
import htmlImg from '../images/skills/html5.png';
import cssImg from '../images/skills/css.png';
import nodeImg from '../images/skills/nodejs-01.png';
import sassImg from '../images/skills/sass.png';
import javascriptImg from '../images/skills/javascript.png';
import phpImg from '../images/skills/php.png';
import mysqlImg from '../images/skills/mysql.png';
import comunicacionImg from '../images/blandas/comunicacion.png';
import equipoImg from '../images/blandas/equipo.png';
import puntualImg from '../images/blandas/puntualidad.png';
import aprendizajeImg from '../images/blandas/aprendizaje.png';
import empatiaImg from '../images/blandas/empatia.png';
import adaptabilidadImg from '../images/blandas/adaptabilidad.png';
import resilenciaImg from '../images/blandas/resilencia.png';
import scrumImg from '../images/blandas/scrum.png';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

const Titulo = styled.h2`
    color: #B76E79;
`;


class Resume extends Component {
    render(){
        return(
            <div>
            <Navbar/>
                <Grid>
                    <Cell col={4} style={{color:"#fff"}}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={foto}
                                alt="Avatar"
                                style={{height: '350px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '1em'}}>Carolina Sanchez</h2>
                        <h4 style={{color: '#6E727D'}}>Programadora Web</h4>
                        <hr style={{borderTop: '3px solid #B76E79', width: '60%'}} />
                        <p style={{textAlign:"justify"}}>
                        <b style={{color:"#B75C69", fontSize:"20px"}}>Gracias por pasarte por aqui y permitirme darme a conocer.</b> <br/>
                        Mi nombre Carolina y soy una mujer que se considera responsable, muy puntual, curiosa y
                        resolutiva, que si no sabe algo, lo investiga.
                        Tengo buen manejo de relaciones interpersonales 
                        y facilidad para trabajar en equipo, siempre intento mantener 
                        una buena comunicación, me considero una persona amable y servicial.
                        Tengo mucha disposición para aprender y
                        adaptarme a nuevas tecnologías. Aunque me inicie en la programacion POO,
                        me incliné más hacia la programación web, actualmente soy autodidacta y tambien estoy
                        haciendo el curso de Trayecto Programador con Python en la CFP5.
                        Me gusta estudiar, aprender, experimentar y ver buenos resultados, me
                        siento siempre lista para nuevos desafíos.
                        Quiero establecerme en una empresa que confie en mis capacidades y apueste por el 
                        crecimiento mutuo, formar parte de un equipo de trabajo, aplicar los conocimientos adquiridos 
                        y aprender mucho más, y asi contribuir con mi experiencia y dedicación en las tareas y 
                        proyectos asignados.
                        </p>
                        <hr style={{borderTop: '3px solid #B76E79', width: '60%'}} />
                        <h5>Dirección</h5>
                        <p>San Andres, Gral. San Martin. Prov. de Buenos Aires</p>
                        {/* <h5>Celular y Whatsapp</h5>
                        <p>(+54) 9 11 2255 6251</p> */}
                        <h5>Email</h5>
                        <p>jeyca0115@gmail.com</p>
                        <h5>Sitio Web/Portfolio</h5>
                        <p><a href="http://deluxe.com.ar">Deluxe.com</a></p>
                        <hr style={{borderTop: '3px solid #B76E79', width: '60%'}} />

                        <h3>Habilidades Blandas</h3>

                            <List style={{width: '300px'}}>
                                <ListItem>
                                    <Avatar
                                        variant="square"
                                        alt="Comunicación"
                                        src={comunicacionImg}
                                    />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>Buena Comunicación</ListItemContent>
                                </ListItem>

                                <ListItem>
                                <Avatar
                                        alt="Equipo"
                                        src={equipoImg}
                                />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>Trabajo en Equipo</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <Avatar
                                            alt="Puntualidad"
                                            src={puntualImg}
                                    />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>Puntualidad</ListItemContent>
                                    
                                </ListItem>

                                <ListItem>
                                    <Avatar
                                            alt="Aprender"
                                            src={aprendizajeImg}
                                    />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>Facilidad para aprender</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <Avatar
                                            alt="Empatía"
                                            src={empatiaImg}
                                    />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>Empatía</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <Avatar
                                            alt="Adaptación"
                                            src={adaptabilidadImg}
                                    />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>Facilidad de adaptación</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <Avatar
                                            alt="Resiliencia"
                                            src={resilenciaImg}
                                    />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>Resiliencia</ListItemContent>
                                </ListItem>

                            </List>

                            <hr style={{borderTop: '3px solid #B76E79', width: '60%'}} />

                            <p style={{fontSize:"35px", textAlign:"center", lineHeight:"40px", padding:"5px"}}>“No tienes que ser grande para comenzar, pero tienes que comenzar para ser grande.” 
                            </p>
                            <p style={{fontSize:"20px", textAlign:"right", fontStyle:"italic"}}>–Zig Ziglar</p>
                            
                    </Cell>


                    <Cell className="resume-right-col" col={8}>
                        <Titulo>Educación</Titulo>

                        <Education 
                            startYear={2021}
                            endYear= "Actual"
                            schoolName="Media Chicas"
                            schoolCourse="Codear Futur@: Mujeres en Programación Full Stack - JS. "
                            schoolDescription=" Desarrollo web mediante HTML y CSS. Programación Frontend con JavaScript y React.js. Backend con Node.Js."
                        />

                        <Education 
                            startYear={2021}
                            endYear= "Actual"
                            schoolName="CFP 5 - Centro de formación profesional N.º 5"
                            schoolCourse="Programa Trayecto Programador"
                            schoolDescription="Técnicas de Programación, Bases de datos SQL, Programacion Orientada a Objetos con Python"
                        />

                        <Education 
                            startYear={2020}
                            endYear="Actual"
                            schoolName="Wall Street English"
                            schoolCourse="Inglés"
                            schoolDescription="Aprendizaje del lenguaje inglés, practicas: Escritura, habla y lectura"
                        />

                        <Education 
                            startYear={2020}
                            endYear={2020}
                            schoolName="CodoaCodo"
                            schoolCourse="Desarrollador Fullstack con PHP"
                            schoolDescription="Creación y manipulación de datos desde MySQL, consultas SQL, CRUD con PHP, conceptos basicos de NODEjs"
                        />

                        <Education 
                            startYear={2020}
                            endYear={2020}
                            schoolName="Digit@lers"
                            schoolCourse="Desarrollador Fullstack con PHP"
                            schoolDescription="Manejo y manipulación de datos desde MySQL, consultas SQL, CRUD con PHP"
                        />

                        <Education 
                            startYear={2020}
                            endYear={2020}
                            schoolName="Educación IT"
                            schoolCourse="Programación Web en PHP y MySQL"
                            schoolDescription="Manejo y manipulación de datos, consultas SQL, bases de datos relacionales"
                        />

                        <Education 
                            startYear={2020}
                            endYear={2020}
                            schoolName="Educación IT"
                            schoolCourse="Introducción a Bases de Datos y SQL"
                            schoolDescription="Manejo y manipulación de datos, consultas SQL, bases de datos relacionales"
                        />

                        <Education 
                            startYear={2020}
                            endYear={2020}
                            schoolName="Educación IT"
                            schoolCourse="HTML5: Fundamentos Web"
                            schoolDescription="Conocimientos básicos en HTML, codificación de documentos HTML, XML y XHTML."
                        />

                        <Education 
                            startYear={2020}
                            endYear="Actual"
                            schoolName="Udemy"
                            schoolCourse="React - Guía completa: Hooks Context Redux MERN +15 Apps"
                            schoolDescription="Incluye React Hooks, Gatsby y GraphQL, Firestore, Redux, 
                            Context, MERN, Next.js, Styled Components, Custom Hooks"
                        />

                        <Education
                            startYear={2019}
                            endYear={2019}
                            schoolName="Educación IT"
                            schoolCourse="ReactJS"
                            schoolDescription="Primeros pasos con React"
                        />

                        <Education 
                            startYear={2019}
                            endYear={2019}
                            schoolName="Educación IT"
                            schoolCourse="Introducción a la programación en Javascript"
                            schoolDescription="Fundamentos de programación, para primeros pasos como programador. 
                            Aprendiendo las bases para generar cualquier tipo de desarrollo en entornos tanto Web como Mobile"
                        />

                        <Education 
                            startYear={2007}
                            endYear={2008}
                            schoolName="Institucion Universitaria Antonio Jose Camacho"
                            schoolCourse="Tecnología en Sistemas de Información"
                            schoolDescription="Completado: 4 Semestres"
                        />

                        <hr style={{borderTop: '3px solid #B76E79', width: '60%'}} />
                        <Titulo>Certificaciones</Titulo>

                        <Education 
                            startYear={2020}
                            endYear="No tiene vencimiento"
                            schoolName="Coursera"
                            schoolCourse="Diseñando páginas web con Bootstrap 4"
                            schoolDescription="ID Credencial: 4K8ACTZEMM75"
                        />

                        <Education 
                            startYear={2020}
                            endYear="No tiene vencimiento"
                            schoolName="LinkedIn"
                            schoolCourse="Conviértete en desarrollador web full-stack"
                            schoolDescription="ID Credencial: AVP9N0BLmXbWGGrbTwE_IC_xQGWd"
                        />

                        <Education 
                            startYear={2020}
                            endYear={2022}
                            schoolName="CertiProf"
                            schoolCourse="Scrum Foundation Professional Certificate (SFPC) - (Spanish)"
                            schoolDescription="ID Credencial: f994b663-004f-4197-bf33-203213b36b92"
                        />




                        <hr style={{borderTop: '3px solid #B76E79'}} />
                        <Titulo>Experiencia</Titulo>

                        <Experience
                            startYear={2021}
                            endYear={"Actual"}
                            jobName="Fullstack Web Developer"
                            jobCompany="Ministerio del Interior"
                            
                            jobDescription=" Desarrollo full stack de sitios web: HTML, CSS, Bootstrap, JavaScript, JQuery, Responsive design, bases de datos, MySQL y PHP."
                        />

                        <Experience
                            startYear={2020}
                            endYear={2020}
                            jobName="Frontend Web Developer"
                            jobCompany="Swift Copy - Colombia"
                            jobDescription=" Sitio web front end para librería, codificacion en HTML5, CSS3,
                                Bootstrap4 y Javascript."
                        />

                        <Experience
                            startYear={2019}
                            endYear={2020}
                            jobName="Frontend Web Developer"
                            jobCompany="Doctor Walter Bargaz"
                            jobDescription=" Programador web para consultorio dental para actualizar el sitio web,
                            con fines informativos. Incluye codificación en HTML5,
                            CSS3, Bootstrap y Javascript."
                        />

                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobName="Frontend Web Developer Jr"
                            jobCompany="Royal House Institute"
                            jobDescription=" Desarrollador web junior en un instituto de inglés para crear un sitio web, con fines informativos. Incluye
                            Codificación HTML5 y CSS3."
                        />

                        <hr style={{borderTop: '3px solid #B76E79'}} />
                        <Titulo>Conocimientos</Titulo>

                        <Grid>
                            <Cell col={6}>
                            <List style={{width: '300px'}}>
                                <ListItem>
                                    <Avatar
                                        variant="square"
                                        alt="Javascript"
                                        src={javascriptImg}
                                    />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>Javascript</ListItemContent>
                                </ListItem>

                                <ListItem>
                                <Avatar
                                        alt="React"
                                        src={reactImg}
                                />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>ReactJS</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <Avatar
                                            alt="Node"
                                            src={nodeImg}
                                    />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>NodeJS</ListItemContent>
                                    
                                </ListItem>

                                <ListItem>
                                    <Avatar
                                            alt="Bootstrap"
                                            src={bootstrapImg}
                                    />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>Bootstrap</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <Avatar
                                            alt="PHP"
                                            src={phpImg}
                                    />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>PHP7</ListItemContent>
                                    
                                </ListItem>

                            </List>
                            </Cell>

                            <Cell col={6}>
                            <List style={{width: '300px'}}>
                                <ListItem>
                                    <Avatar
                                        variant="square"
                                        alt="HTML5"
                                        src={htmlImg}
                                    />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>HTML5</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <Avatar
                                        variant="square"
                                        alt="CSS3"
                                        src={cssImg}
                                    />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>CSS3</ListItemContent>
                                </ListItem>

                                <ListItem>
                                <Avatar
                                        alt="Git"
                                        src={gitImg}
                                            />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>GIT</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <Avatar
                                            alt="Sass"
                                            src={sassImg}
                                    />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>SASS</ListItemContent>
                                    
                                </ListItem>


                                <ListItem>
                                    <Avatar
                                            alt="MySQL"
                                            src={mysqlImg}
                                    />
                                    <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>MySQL</ListItemContent>
                                    
                                </ListItem>

                            </List>
                            </Cell>
                        </Grid>

                        <hr style={{borderTop: '3px solid #B76E79'}} />
                        <Titulo>Metodologías Ágiles</Titulo>

                        <ListItem>
                            <Avatar
                                alt="Scrum"
                                src={scrumImg}
                            />
                            <ListItemContent style={{marginLeft: '10px', color:'#fff'}}>Scrum</ListItemContent>
                                    
                        </ListItem>
                        

                    </Cell>
                </Grid>

                <ScrollUpButton style={{background:"#B76E79"}}
                EasingType="easeInOutBack"
                />
            </div>
        )
    }
}

export default Resume;