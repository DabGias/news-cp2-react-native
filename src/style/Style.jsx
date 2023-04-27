import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // Cards: #3D4E5F
    // Background: #2D3946
    container: {
        display: "flex",
        backgroundColor: '#2D3946',
        alignItems: 'center',
        justifyContent: 'center'
    },

    card: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: 'red',
        borderRadius: 15,
        width: "95%",
        maxWidth: "95%",
        marginTop: 10,
        marginBottom: 10,
        padding: 15
    }
})
