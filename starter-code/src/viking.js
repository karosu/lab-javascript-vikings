// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {

    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    
    this.name = name;


  }
  receiveDamage(damage) {

    this.health -= damage;
    if (this.health > 0)
    {
      return `${this.name} has received ${damage} points of damage`; 
    }
    else if (this.health <= 0)
    {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {

    return "Odin Owns You All!"
  }


}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);}
    
    receiveDamage(damage) {

      this.health -= damage;
      if (this.health > 0)
      {
        return `A Saxon has received ${damage} points of damage`; 
      }
      else if (this.health <= 0)
      {
        return `A Saxon has died in combat`;
      }
  
  }
  
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {

    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {

    let s = this.myrandom(this.saxonArmy);
    let result = s.receiveDamage(this.myrandom(this.vikingArmy). attack());
    if (result === 'A Saxon has died in combast')
      this.saxonArmy.splice(this.saxonArmy.findIndex(s), 1);
  
    
    
  }

  myrandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
