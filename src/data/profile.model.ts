import { ImageSourcePropType } from 'react-native';

export class ProfileData {
  
  constructor(
    readonly firstname: string,
    readonly lastname: string,
    readonly avatar: ImageSourcePropType) {

  }

  get fullname(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  static empty(): ProfileData {
    return new ProfileData(
      '',
      '',
      require('../assets/images/profile.jpeg'),
    );
  }

  static mocked(): ProfileData {
    return new ProfileData(
      'Alice',
      'Cooper',
      require('../assets/images/profile.jpeg'),
    );
  }
}

