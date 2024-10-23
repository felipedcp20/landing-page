const FootballTeamsModule = (function() {
    // Lista de equipos con escudos
    const teams = [
        {
            name: "Real Madrid",
            country: "España",
            stadium: "Santiago Bernabéu",
            logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
        },
        {
            name: "FC Barcelona",
            country: "España",
            stadium: "Camp Nou",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"
        },
        {
            name: "Manchester United",
            country: "Inglaterra",
            stadium: "Old Trafford",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
        },
        {
            name: "Bayern Múnich",
            country: "Alemania",
            stadium: "Allianz Arena",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg/1024px-FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg.png"
        },
        {
            name: "Paris Saint-Germain",
            country: "Francia",
            stadium: "Parc des Princes",
            logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg"
        },
        {
            name: "Juventus",
            country: "Italia",
            stadium: "Allianz Stadium",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg/800px-Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg.png"
        },
        {
            name: "Liverpool",
            country: "Inglaterra",
            stadium: "Anfield",
            logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
        },
        {
            name: "Chelsea",
            country: "Inglaterra",
            stadium: "Stamford Bridge",
            logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"
        },
        {
            name: "Atlético de Madrid",
            country: "España",
            stadium: "Wanda Metropolitano",
            logo: "https://upload.wikimedia.org/wikinews/en/c/c1/Atletico_Madrid_logo.svg"
        },
        {
            name: "Inter de Milán",
            country: "Italia",
            stadium: "San Siro",
            logo: "https://w7.pngwing.com/pngs/1017/137/png-transparent-inter-milan-2021-hd-logo-thumbnail.png"
        },
        {
            name: "AC Milan",
            country: "Italia",
            stadium: "San Siro",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg"
        },
        {
            name: "Tottenham Hotspur",
            country: "Inglaterra",
            stadium: "Tottenham Hotspur Stadium",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg"
        },
        {
            name: "Borussia Dortmund",
            country: "Alemania",
            stadium: "Signal Iduna Park",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg"
        },
        {
            name: "Ajax",
            country: "Países Bajos",
            stadium: "Johan Cruyff Arena",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg"
        },
        {
            name: "AS Roma",
            country: "Italia",
            stadium: "Stadio Olimpico",
            logo: "https://i.pinimg.com/originals/1d/0d/17/1d0d176e873c86e5d68af6ad043ae274.png"
        }
    ];

    // Función para renderizar los equipos
    function renderTeams() {
        const teamsContainer = document.getElementById("teams");
        teamsContainer.innerHTML = ''; // Limpiar cualquier contenido previo

        // Iterar sobre cada equipo y crear una tarjeta HTML para cada uno
        teams.forEach(team => {
            const teamCard = `
                <div class="col-md-4 my-3">
                    <div class="card text-center">
                        <img src="${team.logo}" class="card-img-top team-logo" alt="Logo de ${team.name}">
                        <div class="card-body">
                            <h5 class="card-title">${team.name}</h5>
                            <p class="card-text">País: ${team.country}</p>
                            <p class="card-text">Estadio: ${team.stadium}</p>
                        </div>
                    </div>
                </div>
            `;
            teamsContainer.innerHTML += teamCard; // Agregar la tarjeta al contenedor
        });
    }

    // Función para agregar un nuevo equipo
    function addTeam(name, country, stadium, logo) {
        teams.push({ name, country, stadium, logo }); // Agregar el nuevo equipo a la lista
        renderTeams(); // Volver a renderizar los equipos
    }

    // Exponer las funciones públicamente
    return {
        renderTeams,
        addTeam
    };
})();

// Llamar a la función para renderizar los equipos al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    FootballTeamsModule.renderTeams();
});
