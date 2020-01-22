import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  listItemTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    flex: 0.7,
  },
  listItemButtonContainer: {
    flex: 0.3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingRight: 0,
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