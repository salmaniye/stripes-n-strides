
import { register, login, getAchievement, postAchievement, getPlans, getBadges } from './utils/apiEndpoints';


describe('register function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('registers user with valid data', async () => {
    const email = 'test@example.com';
    const firstName = 'John';
    const lastName = 'Doe';

   

    //const result = await register(email, firstName, lastName);
    //expect(result.status).toBe(true);
   
  });

  test('returns error when any of email, first name, or last name is empty', async () => {
    const email = '';
    const firstName = '';
    const lastName = '';

    const result = await register(email, firstName, lastName);
    expect(result.status).toBe(false);
    expect(result.message).toBe(' None of email, first name or last name can be empty');

  });
});



describe('login function', () => {
    it('should return error message if no email is provided', async () => {
        const result = await login('');
        expect(result.status).toBe(false);
        expect(result.message).toBe(' Please enter email');
    });

    it('should return user data if email exists', async () => {
        const result = await login('runner01@example.com');
        expect(result.status).toBe(true);
        expect(result.data).toEqual({
            id: 1,
            email: 'runner01@example.com',
            first_name: 'Alice',
            last_name: 'Smith',
            badges: [1, 2]
        });
    });

    it('should return no user found message if email does not exist', async () => {
        const result = await login('nonexistent@example.com');
        expect(result.status).toBe(false);
        expect(result.message).toBe('No user found');
    });
 
  });
  

  describe('getAchievement function', () => {
    it('should return error message if no user_id is provided', async () => {
        const result = await getAchievement('');
        expect(result.status).toBe(false);
        expect(result.message).toBe(' Please send user id');
    });

    it('should return user achievements if user_id exists', async () => {
        const userAchievements = await getAchievement(1); // Assuming user_id 1 exists

        expect(userAchievements.status).toBe(true);
        expect(userAchievements.data.length).toBeGreaterThan(0); // Assuming there are achievements for user_id 1
    });

    it('should return no user achievement message if user_id does not exist', async () => {
        const userAchievements = await getAchievement(999); // Providing a non-existing user_id
        expect(userAchievements.status).toBe(false);
        expect(userAchievements.message).toBe('No user achievement');
    });
});

describe('postAchievement function', () => {
    it('should return error message if not all needed data is provided', async () => {
        const result = await postAchievement('', 1, 10); // Not providing user_id
        expect(result.status).toBe(false);
        expect(result.message).toBe(' Please send all needed data');
    });

    // This test assumes an actual server is running at http://localhost:3001/achievements/
    it('should return success message if POST request is successful', async () => {
        const result = await postAchievement(12, 15, 10); // Providing all needed data
        expect(result.status).toBe(true);
        expect(result.message).toBe('User achievement submitted');
    });
});

describe('getPlans function', () => {
    it('should return all plans if GET request is successful', async () => {
        const result = await getPlans();
        expect(result.status).toBe(true);
    });
});

describe('getBadges function', () => {
    it('should return all plans if GET request is successful', async () => {
        const result = await getBadges();
        expect(result.status).toBe(true);
    });
});
