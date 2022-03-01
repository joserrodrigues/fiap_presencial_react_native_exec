import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => { };

    return Reanimated;
});

jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
            dispatch: jest.fn(),
            setOptions: jest.fn(),
        }),
    };
});

jest.mock("expo", () => {
    const actualNav = jest.requireActual("expo");
    return {
        ...actualNav,
        registerRootComponent: jest.fn((info) => {
            return info;
        }),
    };
});

jest.mock("react-native/Libraries/Core/Devtools/getDevServer",
    () => jest.fn(() => {
        return {
            url: 'http://localhost:8081/',
            fullBundleUrl: null,
            bundleLoadedFromServer: false,
        };
    })
);

jest.mock('react-native/Libraries/Utilities/Platform', () => {
    let platform = {
        OS: 'ios',
    }

    const select = jest.fn().mockImplementation((obj) => {
        const value = obj[platform.OS]
        return !value ? obj.default : value
    })

    platform.select = select

    return platform
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

global.__isMocking__ = true;