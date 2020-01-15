import React, { Component } from 'react';
import { Text, Button, Input, Layout, Select, BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { View, StyleSheet, Image } from 'react-native';
import SettingsList from 'react-native-settings-list';

export default class Profile extends Component {
    render() {
        return (
            <Layout style={styles.container}>
                <Text style={styles.profilePhoto}>Profile Photo Here</Text>
                <Layout style={styles.settingsList}>
                    <SettingsList backgroundColor='#2E3A59' defaultTitleStyle={{ color: 'white' }}>
                        <SettingsList.Header headerText='PROFILE' headerStyle={{ color: 'white', marginLeft: 15 }} />
                        <SettingsList.Item
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            titleInfo='firstname'
                            hasNavArrow={false}
                            title='First Name' />
                        <SettingsList.Item
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            title='Last Name'
                            titleInfo='lastname'
                            hasNavArrow={false} />
                        <SettingsList.Item
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            titleInfo='emailaddress'
                            hasNavArrow={false}
                            title='Email' />
                        <SettingsList.Item
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            title='Gender' />
                        <SettingsList.Item
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            title='Weight Units' />
                        <SettingsList.Item
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            title='Sync with Health App' />
                        <SettingsList.Item
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            title='Notifications' />
                        <SettingsList.Item
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            title='Log Out' />
                    </SettingsList>
                </Layout>
                <BottomNavigationWithIconsShowcase style={styles.bottomTabs}/>
            </Layout>
        );
    }
}

const BottomNavigationWithIconsShowcase = () => {

    const [bottomSelectedIndex, setBottomSelectedIndex] = React.useState(0);

    return (
        <Layout>
            <BottomNavigation
                style={styles.bottomNavigation}
                selectedIndex={bottomSelectedIndex}
                onSelect={setBottomSelectedIndex}>
                <BottomNavigationTab title='Discover' icon={PersonIcon} />
                <BottomNavigationTab title='Feed' icon={BellIcon} />
                <BottomNavigationTab title='Train' icon={EmailIcon} />
                <BottomNavigationTab title='Calendar' icon={EmailIcon} />
                <BottomNavigationTab title='Profile' icon={EmailIcon} />
            </BottomNavigation>
        </Layout>
    );
};

const PersonIcon = (style) => (
    <Icon {...style} name='person-outline' />
);

const BellIcon = (style) => (
    <Icon {...style} name='bell-outline' />
);

const EmailIcon = (style) => (
    <Icon {...style} name='email-outline' />
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profilePhoto: {
        flex: 0.19,
        textAlign: 'center',
        marginTop: 50,
        paddingTop: 50
    },
    settingsList: {
        flex: 0.8
    },
    bottomTabs: {
        flex: 0.01,
        textAlign: 'center',
        marginBottom: 10,
        marginVertical: 8
    }
});
