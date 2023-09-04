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
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {

    super(health, strength);
    this.name = name;
    
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health <= 0) {
      return "A Saxon has died in combat";
    } else {
      return `A Saxon has received ${damage} points of damage`;
}
  }}
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
      const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      const randomSaxon = this.saxonArmy[randomSaxonIndex];

      const result = randomSaxon.receiveDamage(randomViking.strength);

      if (randomSaxon.health <= 0) {
          this.saxonArmy.splice(randomSaxonIndex, 1);
      }

      return result;
  }

  saxonAttack() {
      const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      const randomViking = this.vikingArmy[randomVikingIndex];

      const result = randomViking.receiveDamage(randomSaxon.strength);

      if (randomViking.health <= 0) {
          this.vikingArmy.splice(randomVikingIndex, 1);
      }

      return result;
  }
}
