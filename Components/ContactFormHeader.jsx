import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

export const ContactHeader = ({ total }) => {
  return (
    <View style={styles.header}>
      <View style={styles.logos}>
        <FontAwesome5
          name="cc-visa"
          size={24}
          color={COLORS.gray}
          style={styles.icons}
        />
        <FontAwesome
          name="cc-mastercard"
          size={24}
          color={COLORS.gray}
          style={styles.icons}
        />
        <FontAwesome
          name="cc-paypal"
          size={24}
          color={COLORS.gray}
          style={styles.icons}
        />
      </View>
      <Text style={styles.headerTitle}>Payment amount</Text>
      <Text style={styles.checkoutAmount}>
        <FontAwesome5 name="ethereum" size={24} color={COLORS.gray} />
        <Text style={{ marginLeft: 10, borderWidth: 1 }}>
          {total ? total : 0}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 40,
  },
  logos: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.gray,
  },
  checkoutAmount: {
    fontSize: 30,
    marginTop: 10,
    color: COLORS.gray,
  },
  icons: {
    marginRight: 5,
  },
});
