import { character, getSpecial } from '../app';

describe('test app.js', () => {
  it('getSpecial returns special', () => {
    const mockedResult = [{
      description: 'Двойной выстрел наносит двойной урон',
      icon: 'http://...',
      id: 8,
      name: 'Двойной выстрел',
    },
    {
      description: 'Описание недоступно',
      icon: 'http://...',
      id: 9,
      name: 'Нокаутирующий удар',
    },
    ];

    expect(getSpecial(character)).toEqual(mockedResult);
  });

  it('throw error with wrong params', () => {
    expect(() => getSpecial({})).toThrow('There is no property special');
    expect(() => getSpecial({ special: null })).toThrow('Wrong type of special');
  });
});
