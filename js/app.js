var titrePrincipal = document.getElementById('titre_principal');

// Tableau contenant les mots à alterner
var mots = ["Étudiant"];
var indexMot = 0;

// Fonction pour alterner entre les mots avec une transition en douceur
function alternerMots() {
    indexMot = (indexMot + 1) % mots.length;
    titrePrincipal.style.opacity = 0; // Réduire l'opacité pour la transition en douceur
    setTimeout(function() {
        titrePrincipal.textContent = mots[indexMot];
        titrePrincipal.style.color = getRandomColor(); // Modifier la couleur du texte
        titrePrincipal.style.opacity = 1; // Rétablir l'opacité
    }, 800); // Temps de transition en millisecondes
}

// Appel de la fonction toutes les X secondes
setInterval(alternerMots, 3000);

// Fonction pour obtenir une couleur de texte aléatoire
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/* Portfolio DU JS */

function tabsFilters(){
    const tabs=document.querySelectorAll('.portfolio-filters a');
    const projets=document.querySelectorAll('.portfolio .card');



    const resetActiveLinks = () =>{
        tabs.forEach(elem => {
            elem.classList.remove('active');

        })
    }


    const showProjects =(elem) => {
        projets.forEach(projet =>{
            let filter =projet.getAttribute('data-category');
            if(elem=='all' || elem ==null){
                projet.parentNode.classList.remove('hide');
                return
            }
            console.log(filter);
            if (filter !==elem){
                projet.parentNode.classList.add('hide');
            
            }else {projet.parentNode.classList.remove('hide');}


        });
    }

    tabs.forEach(elem => {
        elem.addEventListener('click' , (event) =>{
            event.preventDefault();
            let filter= elem.getAttribute('data-filter');
            showProjects(filter);
            resetActiveLinks();
            elem.classList.add('active');
        })
    })


    showProjects();
}


tabsFilters();

const observerIntersectionAnimation = () => {
    const sections =document.querySelectorAll('section');
    const skills =document.querySelectorAll('.skills .bar');
    sections.forEach((section,index)=>{
        if(index===0) return;
        section.style.opacity=0;
        section.style.transition="all 1.6s";

    });

    skills.forEach((elem,index)=>{
        elem.style.width=0;
        elem.style.transition="all 1.6s";

    });

    let sectionObserver= new IntersectionObserver(function(entries,observer){
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                let elem =entry.target;
                elem.style.opacity=1;
             
            }

        });
    });

    sections.forEach((section)=>{
        sectionObserver.observe(section);

    });


    let skillsObserver= new IntersectionObserver(function(entries,observer){
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                let elem =entry.target;
                elem.style.width=elem.dataset.width+"%";
            }

        });
    });

    skills.forEach((skill)=>{

        skillsObserver.observe(skill);

    });

}

observerIntersectionAnimation();