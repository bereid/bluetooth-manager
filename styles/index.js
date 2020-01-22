import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    padding: 20,
  },
  listItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  listItemTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 0.7,
  },
  listItemButtonContainer: {
    flex: 0.3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  listContainer: {
    marginBottom: 20,
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
  progressContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
  }
});

export default styles;