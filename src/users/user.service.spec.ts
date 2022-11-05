import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './user.service';

describe('User Service', () => {
  let userService: UsersService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersService],
      providers: [UsersService],
    }).compile();

    userService = app.get<UsersService>(UsersService);
  });

  describe('root', () => {
    it('should create users', () => {
      expect(
        userService.createUser({ email: 'test@gmail.com', age: 22 }).userId,
      ).toBeTruthy();
    });
  });
});
