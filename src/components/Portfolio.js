import React from 'react';
import Navbar from './Navbar';
import {Typography, Button, Tabs, Tab, AppBar, Box, } from '@material-ui/core';
import { CardText, CardTitle, Card, CardActions } from 'react-mdl';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import PropTypes from 'prop-types';

function TabPanel(props) {  
    const { children, value, index, ...other } = props;  
    
    return (  
        <Typography  
        component="div"  
        role="tabpanel"  
        hidden={value !== index}  
        id={`simple-tabpanel-${index}`}  
        aria-labelledby={`simple-tab-${index}`}  
        {...other}  
        >  
        {value === index && <Box p={3}>{children}</Box>}  
        </Typography>  
    );  
}  
    
    TabPanel.propTypes = {  
    children: PropTypes.node,  
    index: PropTypes.any.isRequired,  
    value: PropTypes.any.isRequired,  
    };  
    function testProps(index) {  
    return {  
        id: `simple-tab-${index}`,  
        'aria-controls': `simple-tabpanel-${index}`,  
    };  
}  
    export default function TabsDemo() {  
    const [value, setValue] = React.useState(0);  
    
    const handleChange = (event, newValue) => {  
        setValue(newValue);  
    };  
    
    return (  
        <div>  
            <Navbar/>
            <AppBar position="sticky" style={{background:"#08171E"}}>  
                <Tabs 
                    value={value} 
                    onChange={handleChange}
                    TabIndicatorProps={{style: {background:'#B76E79'}}}
                    centered
                >  
                    <Tab label="ReactJS" {...testProps(0)} />  
                    <Tab label="Bootstrap" {...testProps(1)} />  
                    <Tab label="HTML5/CSS3" {...testProps(2)} />   
                </Tabs>  
            </AppBar>  
            {/* Tab REACT */}
        <TabPanel value={value} index={0}>  

        <div className="projects-grid">
                    {/*Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: '2rem auto'}}>
                        <CardTitle style={{color: '#000', padding:'2px', margin:'0px',height: '185px',background:'url(https://i.ibb.co/5sxV1Bb/coctel.jpg) center/cover'}}>
                            App Recetas de Cocteles
                        </CardTitle>
                        <CardText>
                        App ReactJS para busqueda de cocteles que incluye Context API y el Hook de useContext()
                        </CardText>
                        <CardActions border>

                            <Button>
                                <a 
                                href="http://carosanchez.com.ar/muestras/recipes/" 
                                target="_blank"
                                rel="noopener noreferrer" 
                                style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    LiveDemo
                                </a>
                            </Button>
                            <Button>
                                <a 
                                href="https://github.com/caro-san/bebidas" 
                                target="_blank"
                                rel="noopener noreferrer" 
                                style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    GitHub
                                </a>
                            </Button>
                        </CardActions>
                    </Card>

                    {/*Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: '2rem auto'}}>
                        <CardTitle style={{color: '#000', padding:'2px', margin:'0px', height: '185px', background:'url(https://i.ibb.co/znrB07K/portfolio.jpg) center/cover'}}>
                            Portfolio #1
                        </CardTitle>
                        <CardText>
                        Incluye encabezado superior y Barra de navegación lateral con React-Router y styled components.
                        </CardText>
                        <CardActions border>
                        <Button>
                            <a 
                                href="https://github.com/caro-san/Portfolio1" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{textDecoration:"none", color: "#B76E79"}}
                            >
                                GitHub
                            </a>
                        </Button>
                        </CardActions>
                    </Card>

                    {/*Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: '2rem auto'}}>
                        <CardTitle style={{color: '#000', padding:'2px', margin:'0px', height: '185px', background:'url(https://i.ibb.co/bXSL2y0/buscador.jpg) center/cover'}}>
                            Buscador de Imagenes
                        </CardTitle>
                        <CardText>
                        App web que consulta una API para traer imagenes. Incluye un paginador personalizado.
                        </CardText>
                        <CardActions border>
                            <Button>
                                <a 
                                    href="http://carosanchez.com.ar/muestras/pixabay/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    LiveDemo
                                </a>
                            </Button>
                            <Button>
                                <a 
                                    href="https://github.com/caro-san/pixabay" 
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    GitHub
                                </a>
                            </Button>
                        </CardActions>
                    </Card>

                    {/*Project 4 */}
                    <Card shadow={5} style={{minWidth: '450', margin: '2rem auto'}}>
                        <CardTitle style={{color: '#000', padding:'2px', margin:'0px', height: '185px', background:'url(https://i.ibb.co/8s6rmdL/breaking-bad.jpg) center/cover'}}>
                            Frases de Breaking Bad
                        </CardTitle>
                        <CardText>
                        App web que consulta una API, y trae una frase distinta. Incluye Fetch y async/await.
                        </CardText>
                        <CardActions border>
                            <Button>
                                <a 
                                href="http://carosanchez.com.ar/muestras/breakingbad/" 
                                target="_blank"
                                rel="noopener noreferrer" 
                                style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    LiveDemo
                                </a>
                            </Button>
                            <Button>
                                <a 
                                href="https://github.com/caro-san/breakingbad" 
                                target="_blank"
                                rel="noopener noreferrer" 
                                style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    GitHub
                                </a>
                            </Button>
                        </CardActions>
                    </Card>

                    {/*Project 5 */}
                    <Card shadow={5} style={{minWidth: '450', margin: '2rem auto'}}>
                        <CardTitle style={{color: '#000', padding:'2px', margin:'0px', height: '185px', background:'url(https://i.ibb.co/LDFxYs8/letras.jpg) center/cover'}}>
                            Buscador de musica
                        </CardTitle>
                        <CardText>
                        App web que consulta dos API's al mismo tiempo,
                        trae la letra musical y su artista correspondiente.
                        </CardText>
                        <CardActions border>
                            <Button>
                                <a 
                                    href="http://carosanchez.com.ar/muestras/musica/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    LiveDemo
                                </a>
                            </Button>
                            <Button>
                                <a 
                                    href="https://github.com/caro-san/letras" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    GitHub
                                </a>
                            </Button>
                        </CardActions>
                    </Card>

                    {/*Project 6 */}
                    <Card shadow={5} style={{minWidth: '450', margin: '2rem auto'}}>
                        <CardTitle style={{color: '#000' , padding:'2px', margin:'0px', height: '185px', background:'url(https://i.ibb.co/SrjRVVR/bitcoin.jpg) center/cover'}}>
                            Cotizador Criptomonedas
                        </CardTitle>
                        <CardText>
                        App ReactJS. Se Usa una API para traer los datos de varios tipos de moneda en tiempo real.
                        Incluye Styled Components.
                        </CardText>
                        <CardActions border>
                            <Button>
                                <a 
                                    href="http://carosanchez.com.ar/muestras/criptomoneda/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    LiveDemo
                                </a>
                            </Button>
                            <Button>
                                <a 
                                    href="https://github.com/caro-san/criptomonedas" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    GitHub
                                </a>
                            </Button>
                        </CardActions>
                    </Card>

                    {/*Project 7 */}
                    <Card shadow={5} style={{minWidth: '450', margin: '2rem auto'}}>
                        <CardTitle style={{color: '#000', padding:'2px', margin:'0px', height: '185px', background:'url(https://i.ibb.co/P1pGnhR/cotizador.jpg) center/cover'}}>
                            Cotizador de Seguros
                        </CardTitle>
                        <CardText>
                        App que incluye integracion de funciones "helper", animaciones en React, State, forms y Components.
                        </CardText>
                        <CardActions border>
                            <Button>
                                <a 
                                    href="http://carosanchez.com.ar/muestras/cotizador/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    LiveDemo
                                </a>
                            </Button>
                            <Button>
                                <a 
                                    href="https://github.com/caro-san/cotizador" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    GitHub
                                </a>
                            </Button>
                            
                        </CardActions>
                    </Card>

                    {/*Project 8 */}
                    <Card shadow={5} style={{minWidth: '450', margin: '2rem auto'}}>
                        <CardTitle style={{color: '#000', padding:'2px', margin:'0px', height: '185px', background:'url(https://i.ibb.co/sFB7HwR/clima.jpg) center/cover'}}>
                            Clima desde una API
                        </CardTitle>
                        <CardText>
                        Se toman datos de un formulario y se pasan como parámetros a una API, 
                        y se hace la consulta para obtener el clima de una ciudad.
                        </CardText>
                        <CardActions border>
                            <Button>
                                <a 
                                    href="http://carosanchez.com.ar/muestras/clima/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    LiveDemo
                                </a>
                            </Button>
                            <Button>
                                <a 
                                    href="https://github.com/caro-san/clima" 
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    GitHub
                                </a>
                            </Button>
                        </CardActions>
                    </Card>

                    {/*Project 9 */}
                    <Card shadow={5} style={{minWidth: '450', margin: '2rem auto'}}>
                        <CardTitle style={{color: '#000', padding:'2px', margin:'0px', height: '185px', background:'url(https://i.ibb.co/27vCg6b/News.jpg) center/cover'}}>
                            Buscador de Noticias
                        </CardTitle>
                        <CardText>
                        App web, que consulta una API, incluye creación de Custom Hooks y CSS modules.
                        </CardText>
                        <CardActions border>
                            <Button>
                                <a 
                                    href="https://github.com/caro-san/noticias" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    LiveDemo
                                </a>
                            </Button>
                            <Button>
                                <a 
                                    href="http://carosanchez.com.ar/muestras/noticias/" 
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    GitHub
                                </a>
                            </Button>
                        </CardActions>
                    </Card>

                    {/*Project 10 */}
                    <Card shadow={5} style={{minWidth: '450', margin: '2rem auto'}}>
                        <CardTitle style={{color: '#000', padding:'2px', margin:'0px', height: '185px', background:'url(https://i.ibb.co/gSbFrQm/veterinaria.jpg) center/cover'}}>
                        Admin de Pacientes
                        </CardTitle>
                        <CardText>
                        App web que lee datos de un formulario, y los almacena en LocalStorage. Incluye validación de datos,
                        y vista de componentes de forma condicional.
                        </CardText>
                        <CardActions border>
                            <Button>
                                <a 
                                    href="http://carosanchez.com.ar/muestras/veterinaria/" 
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    LiveDemo
                                </a>
                            </Button>
                            <Button>
                                <a 
                                    href="https://github.com/caro-san/pacientesveterinaria" 
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    style={{textDecoration:"none", color: "#B76E79"}}
                                >
                                    GitHub
                                </a>
                            </Button>
                            
                        </CardActions>
                    </Card>
                </div>

        </TabPanel>

        {/* Tab BOOTSTRAP */}
        <TabPanel value={value} index={1}>
            <div className="projects-grid">

            {/*Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: '2rem auto'}}>
                <CardTitle style={{color: '#000', padding:'2px', margin:'0px', height: '185px', background:'url(https://i.ibb.co/SfnZytZ/scopy.jpg) center/cover'}}>
                    SwiftCopy 
                </CardTitle>
                <CardText>
                    Pagina realizada con HTML5, CSS3, Bootstrap4 y Javascript
                </CardText>
                <CardActions border>
                    <Button>
                        <a 
                            href="http://carosanchez.com.ar/muestras/sCopy/index.html" 
                            target="_blank"
                            rel="noopener noreferrer" 
                            style={{textDecoration:"none", color: "#B76E79"}}
                        >
                            LiveDemo
                        </a>
                    </Button>
                    <Button>
                        <a 
                            href="https://github.com/caro-san/SwiftCopy" 
                            target="_blank"
                            rel="noopener noreferrer" 
                            style={{textDecoration:"none", color: "#B76E79"}}
                        >
                            GitHub
                        </a>
                    </Button>
                </CardActions>
            </Card>
            
            {/*Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: '2rem auto'}}>

                <CardTitle style={{color: '#fff', height: '185px', background:'url(https://i.ibb.co/DbNyKTY/walter.jpg) center/cover'}}>
                    Walter Bargaz 'Dentista'
                </CardTitle>
                <CardText>
                    Pagina realizada con Bootstrap y Javascript
                </CardText>
                <CardActions border>
                    <Button>
                        <a 
                            href="http://drwalterbargaz.com.ar/" 
                            target="_blank"
                            rel="noopener noreferrer" 
                            style={{textDecoration:"none", color: "#B76E79"}}
                        >
                            LiveDemo
                        </a>
                    </Button>
                    <Button>
                        <a 
                            href="https://github.com/caro-san/ConsultorioDrWalterBargaz" 
                            target="_blank"
                            rel="noopener noreferrer" 
                            style={{textDecoration:"none", color: "#B76E79"}}
                        >
                            GitHub
                        </a>
                    </Button>
                </CardActions>
            </Card>

            </div>
            
        </TabPanel>  

        {/* Tab HTML/CSS */}
        <TabPanel value={value} index={2}>  
            {/*Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background:'url(https://i.ibb.co/F7ZwGTL/royal.jpg) center/cover'}}>
                    Royal House Institute
                </CardTitle>
                <CardText>
                    Pagina realizada solo con HTML5 Y CSS3
                </CardText>
                <CardActions border>
                    <Button>
                        <a 
                            href="http://tiendapanda.com/muestras/royal/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{textDecoration:"none", color: "#B76E79"}}
                        >
                            LiveDemo
                        </a>
                    </Button>
                    <Button>
                        <a 
                            href="https://github.com/caro-san/RoyalHouseInstitute" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{textDecoration:"none", color: "#B76E79"}}
                        >
                            GitHub
                        </a>
                    </Button>
                </CardActions>
            </Card>
        </TabPanel> 



        <ScrollUpButton style={{background:"#B76E79", zIndex:"1"}}
            EasingType="easeInOutBack"
        />

        </div>  
    );  
}  