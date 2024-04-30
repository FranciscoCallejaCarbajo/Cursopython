Codigo para el apartado Competiciones


1. Introducción a las Competiciones
<section class="content competiciones">
    <h2 class="title">Competiciones</h2>
    
    <article class="introduction">
        <h3>Participación en el Mundo de los Esports</h3>
        <p>
            En el Gaming Barcelona Esports Club, nos enorgullece nuestra amplia participación en diversas competiciones de esports. Desde torneos locales hasta eventos internacionales, nuestro club está siempre presente en la escena competitiva.
        </p>
    </article>
</section>

2. Tipos de Competiciones
<article class="types-of-competitions">
    <h3>Tipos de Competiciones</h3>

    <div class="competition-list">
        <h4>Torneos Locales</h4>
        <p>
            Participamos activamente en torneos locales donde nuestros jugadores tienen la oportunidad de competir contra equipos de la misma región, demostrando su talento y habilidades.
        </p>

        <h4>Competencias Nacionales</h4>
        <p>
            A nivel nacional, representamos al Gaming Barcelona Esports Club en competencias que atraen a los mejores equipos de todo el país. Es una oportunidad para medirnos y aprender de los mejores.
        </p>

        <h4>Eventos Internacionales</h4>
        <p>
            Nuestro club no se detiene en las fronteras. Participamos en eventos internacionales, enfrentándonos a equipos de todo el mundo y llevando el nombre del club a lo más alto.
        </p>
    </div>
</article>

3. Logros y Reconocimientos
<article class="achievements">
    <h3>Logros y Reconocimientos</h3>
    <p>
        A lo largo de nuestra trayectoria, hemos logrado múltiples títulos y reconocimientos que nos avalan como uno de los clubes más destacados en el ámbito de los esports.
    </p>
</article>

4. Testimonios

<article class="testimonials">
    <h3>Testimonios</h3>
    
    <div class="testimonial-list">
        <blockquote>
            "Participar en las competiciones con el Gaming Barcelona Esports Club ha sido una experiencia inolvidable. El nivel de organización y el apoyo del club son incomparables." - <cite>Nombre del Jugador</cite>
        </blockquote>

        <blockquote>
            "Los torneos y competencias nos han permitido crecer como equipo y como individuos. Estamos orgullosos de formar parte de este club." - <cite>Nombre del Jugador</cite>
        </blockquote>
    </div>
</article>

5. Calendario de Próximas Competiciones
<article class="upcoming-events">
    <h3>Calendario de Próximas Competiciones</h3>
    <p>
        Mantente informado sobre nuestras próximas competiciones y eventos. ¡No te pierdas ninguna oportunidad de apoyar al Gaming Barcelona Esports Club!
    </p>
    
    <div class="calendar">
        <!-- Aquí puedes incluir un calendario interactivo o una lista de eventos -->
        <ul>
            <li>Competencia Local - Fecha</li>
            <li>Torneo Nacional - Fecha</li>
            <li>Evento Internacional - Fecha</li>
        </ul>
    </div>
</article>

6. Galeria de imagenes

<!DOCTYPE html>
<html>
<head>
<style>
div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}
</style>
</head>
<body>

<div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_forest.jpg">
    <img src="img_forest.jpg" alt="Forest" width="600" height="400">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_lights.jpg">
    <img src="img_lights.jpg" alt="Northern Lights" width="600" height="400">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_mountains.jpg">
    <img src="img_mountains.jpg" alt="Mountains" width="600" height="400">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

</body>
</html>

7. flotador

>
<html>
<head>
<style>
div {
  border: 3px solid #4CAF50;
  padding: 5px;
}

.img1 {
  float: right;
}

.img2 {
  float: right;
}

.clearfix {
  overflow: auto;
}
</style>
</head>
<body>

<h2>Without Clearfix</h2>

<p>This image is floated to the right. It is also taller than the element containing it, so it overflows outside of its container:</p>

<div>
  <img class="img1" src="pineapple.jpg" alt="Pineapple" width="170" height="170">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...
</div>

<h2 style="clear:right">With Clearfix</h2>
<p>We can fix this by adding a clearfix class with overflow: auto; to the containing element:</p>

<div class="clearfix">
  <img class="img2" src="pineapple.jpg" alt="Pineapple" width="170" height="170">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...
</div>

</body>
</html>


