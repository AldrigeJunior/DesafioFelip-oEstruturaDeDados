class hero {
    constructor (name, idade, tipo){
        this.name = name;
        this.idade = idade;
        this. tipo = tipo;
        this.ataque = this.tipoAtaque();
    }
    tipoAtaque(){
        let ataque;
        if(this.tipo === "mago" ){
            ataque = "magia";
        } else if(this.tipo === "guerreiro" ){
            ataque = "espada";
        } else if(this.tipo === "monge" ){
            ataque = "artes marciais";
        } else if (this.tipo === "ninja" ){
            ataque = "shuriken";
        }
        return ataque;
    }

    atacar(){
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let guerreiroAtacando = new hero ("Spartakus", 26, "guerreiro")
guerreiroAtacando.atacar()

let magoAtacando = new hero ("Merlin", 306, "mago")
magoAtacando.atacar()

let mongeAtacando = new hero ("Buda", 59, "monge")
mongeAtacando.atacar()

let ninjaAtacando = new hero ("Zabuza", 32, "ninja")
ninjaAtacando.atacar()