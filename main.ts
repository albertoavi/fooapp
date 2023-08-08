import { cTime } from './myLib';
import { cDate } from './myLib';
import { cDT } from './myLib';

import { faker } from '@faker-js/faker';
import { faker as faker_en_GB } from '@faker-js/faker/locale/en_GB';



console.log(cTime() + " Starting app");

for (let x: number = 0; x < 20; x += 1) {
    const fullName = `${faker.person.firstName()} ${faker.person.lastName()}`;
    const fullName_en_GB = `${faker_en_GB.person.firstName()} ${faker_en_GB.person.lastName()}`;
    const email = faker.internet.email();
    const avatarUrl = faker.image.avatar();
    const natureImageUrl = faker.image.urlLoremFlickr({ category: 'nature' });

    const cdt = cDT();
    console.log(`${cdt} *${x}* ${fullName} ${email} ${avatarUrl}`);
}


