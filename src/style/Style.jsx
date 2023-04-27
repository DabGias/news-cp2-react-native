import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // Cards: #3D4E5F
    // Background: #2D3946

    container: {
        display: "flex",
        backgroundColor: '#2D3946',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },

    scrollView: {
        display: "flex", 
        flexDirection: "column", 
        flexWrap: "wrap", 
        alignContent: "center"
    },

    scrollViewInfo: {
        display: "flex", 
        flexDirection: "column", 
        flexWrap: "wrap", 
        alignContent: "center"
    },

    card: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#3D4E5F',
        borderRadius: 15,
        width: "90%",
        marginTop: 10,
        marginBottom: 10,
        margin: "auto"
    },

    viewCardImg: {
        width: "30%", 
        overflow: "hidden", 
        justifyContent: "center", 
        alignItems: "center", 
        borderTopLeftRadius: 15, 
        borderBottomLeftRadius: 15
    },

    cardImg: {
        width: "100%", 
        height: "100%"
    }


})
