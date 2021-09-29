export const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [{
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  },
  {
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
    // <- обратите внимание, описание "засекречено"
  },
  ],
};

export function getSpecial(obj) {
  if (!('special' in obj)) {
    throw new Error('There is no property special');
  }

  if (!Array.isArray(obj.special)) {
    throw new Error('Wrong type of special');
  }
  const { special } = obj;
  return special.map((item) => {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = item;

    return {
      id,
      name,
      icon,
      description,
    };
  });
}
