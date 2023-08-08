"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myLib_1 = require("./myLib");
const myLib_2 = require("./myLib");
const faker_1 = require("@faker-js/faker");
const en_GB_1 = require("@faker-js/faker/locale/en_GB");
console.log((0, myLib_1.cTime)() + " Starting app");
for (let x = 0; x < 20; x += 1) {
    const fullName = `${faker_1.faker.person.firstName()} ${faker_1.faker.person.lastName()}`;
    const fullName_en_GB = `${en_GB_1.faker.person.firstName()} ${en_GB_1.faker.person.lastName()}`;
    const email = faker_1.faker.internet.email();
    const avatarUrl = faker_1.faker.image.avatar();
    const natureImageUrl = faker_1.faker.image.urlLoremFlickr({ category: 'nature' });
    const cdt = (0, myLib_2.cDT)();
    console.log(`${cdt} *${x}* ${fullName} ${email} ${avatarUrl}`);
}
