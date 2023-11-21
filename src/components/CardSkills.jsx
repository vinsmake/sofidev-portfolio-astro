import "../styles/Skills.css"

const cardsData = [
	{
		imgSrc: "./svg/file-type-html.svg",
		imgAlt: "HTML icon",
		title: "HTML✅",
		clas: "html ",
	},
	{
		imgSrc: "./svg/css-color.svg",
		imgAlt: "CSS icon",
		title: "CSS✅",
		clas: "css",
	},
	{
		imgSrc: "./svg/sass.svg",
		imgAlt: "Sass icon",
		title: "Sass✅",
		clas: "",
	},
	{
		imgSrc: "./svg/styledcomponents.svg",
		imgAlt: "Styled components icon",
		title: "Styled Components✅",
		clas: "",
	},
	{
		imgSrc: "./svg/javascript-fill.svg",
		imgAlt: "Javascript icon",
		title: "Javascript✅",
		clas: "javascript",
	},
	{
		imgSrc: "./svg/react-dark.svg",
		imgAlt: "React icon",
		title: "React✅",
		clas: "React ",
	},
	{
		imgSrc: "./svg/astro.svg",
		imgAlt: "Astro icon",
		title: "Astro✅",
		clas: "",
	},
	{
		imgSrc: "./svg/wordpress-icon.svg",
		imgAlt: "Wordpress icon",
		title: "Wordpress✅",
		clas: "wordpress",
	},
	{
		imgSrc: "./svg/nodejs-dark.svg",
		imgAlt: "Node.js icon",
		title: "Node.js🌱",
		clas: "",
	},
	{
		imgSrc: "./svg/npm-wordmark.svg",
		imgAlt: "Wordpress icon",
		title: "npm✅",
		clas: "npm ",
	},
	{
		imgSrc: "./svg/mysql.svg",
		imgAlt: "MySql icon",
		title: "MySql Server🌱",
		clas: "",
	},
];
const CardSkill = () => {
	return (
		<>
			{cardsData.map((cardData) => {
				return (
					<div className="skills__caja caja__dark">
						<div className="img">
							<img
								className={`skills__icono skills__icono__dark ${cardData.clas}`}
								src={cardData.imgSrc}
								alt={cardData.imgAlt}
							/>
						</div>
						<div className="skills__texto">
							<p className="text head titulo__dark">{cardData.title}</p>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default CardSkill;