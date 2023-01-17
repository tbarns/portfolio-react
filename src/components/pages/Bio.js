import headshot from '../../assets/Timothy profile pic square.jpg'
const Bio = () => {
  return (
    <div>
  <div className="tile is-ancestor m-3 p-2" id="about">
        <aside className="about is-vertical is-4 tile is-parent column is-one-quarter">
            <div className="tile is-child">
                <figure className="image is-square">
                    <img src={headshot}
                        alt="professional head-shot of a web developer  wearing a yellow shirt and smiling"/>
                </figure>
            </div>

        </aside>
        <p className="tile is-child is-6 m-1 column is-half">
            I am an American web developer and artist with a background in natural human language. After earning
            degrees in linguistics and French from Western Washington University I went on to use my language skills
            and training to teach English to speakers of other languages. Over the years I have worked in the arts
            as an actor and artist for places like the Gage Academy of Art, Mighty Tripod Acting Studio, Glass Iris
            Productions, Amazon and more.
            My passion for learning, creating and collaboration brought me to the field of web development. I have
            experience with HTML, CSS and JavaScript and received training via the University of Washington's Full
            Stack Coding Boot Camp in collaboration with edX Boot Camps LLC.
        </p>
    </div>

    </div>
  )
}

export default Bio