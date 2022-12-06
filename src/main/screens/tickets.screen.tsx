import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import { useGlobalState } from "~/main/context/global-state.context";
import { t } from "~/shared/intl/translator";
import { Ticket } from "~/main/components/ticket/ticket.component";

export function TicketsScreen() {
  const { globalState } = useGlobalState();

  return (
    <>
      {!globalState.tickets.length && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22, opacity: 0.7 }}>
            {t("No ticket found")}
          </Text>
        </View>
      )}
      <ScrollView style={{ flexGrow: 1 }}>
        {globalState.tickets.map((ticket, index) => (
          <Ticket {...ticket} key={index} />
        ))}
      </ScrollView>
    </>
  );
}
