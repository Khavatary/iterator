export default class Team {
  constructor() {
    this.members = [{
      name: 'Snyper',
      health: 50,
      level: 1,
      type: 'Bowman',
      attack: 25,
      defence: 25,
    },
    {
      name: 'Crusader',
      health: 50,
      level: 1,
      type: 'Swordsman',
      attack: 40,
      defence: 10,
    },
    {
      name: 'Mag',
      health: 50,
      level: 1,
      type: 'Magician',
      attack: 25,
      defence: 25,
    },
    {
      name: 'Immortal',
      health: 50,
      level: 1,
      type: 'Undead',
      attack: 10,
      defence: 40,
    },
    ];
  }

  [Symbol.iterator]() {
    let current = 0;
    const last = this.members.length;
    return {
      next() {
        if (current > last) {
          return {
            done: true,
            value: undefined,
          };
        }
        const temp = this.members[current];
        current += 1;
        return {
          done: false,
          value: temp,
        };
      },
    };
  }
}
