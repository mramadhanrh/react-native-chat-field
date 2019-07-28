import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './MediaItemList.style';
import { getThemeColor } from '../../../themes/themesSetting';
import MediaItem from '../../Buttons/MediaItem/MediaItem';

const MediaItemList = ({ iconList }) => {
  const [itemList, setItemList] = useState([]);
  const itemRowMax = 5;

  const getList = () => {
    const list = [];
    const emptyItem = { icon: null, backgroundColor: 'transparent', text: '', hide: true };
    const fiveMultiplier = itemRowMax - (iconList.length % itemRowMax);
    const length = iconList.length + fiveMultiplier;
    let iRow = 0;
    let iColumn = 0;
    for (let i = 0; i < length; i += 1) {
      if (!list[iRow]) {
        list[iRow] = {
          row: iRow,
          data: []
        };
      }

      if (i < iconList.length)
        list[iRow].data.push({
          row: iRow,
          col: iColumn,
          ...iconList[i]
        });
      else list[iRow].data.push({ row: iRow, col: iColumn, ...emptyItem });

      if (iColumn >= itemRowMax - 1) {
        iRow += 1;
        iColumn = 0;
      } else {
        iColumn += 1;
      }
    }

    return list;
  };

  useEffect(() => {
    setItemList(getList());
  }, []);

  return (
    <View>
      {itemList.map(item => {
        return (
          <View key={item.row} style={styles.listRow}>
            {item.data.map(subItem => {
              return (
                <MediaItem
                  key={`${subItem.row}${subItem.col}`}
                  icon={subItem.icon ? <Icon name={subItem.icon} style={styles.icon} /> : null}
                  backgroundColor={subItem.backgroundColor}
                  hide={'hide' in subItem ? subItem.hide : false}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const defaultListItem = [
  {
    icon: 'address-book',
    backgroundColor: getThemeColor(),
    text: 'Contact'
  },
  {
    icon: 'map-marker-alt',
    backgroundColor: getThemeColor(),
    text: 'Location'
  },
  {
    icon: 'calendar-day',
    backgroundColor: getThemeColor(),
    text: 'Calendar'
  },
  {
    icon: 'grin-squint-tears',
    backgroundColor: getThemeColor(),
    text: 'Sticker'
  },
  {
    icon: 'user-plus',
    backgroundColor: getThemeColor(),
    text: 'Add Member'
  },
  {
    icon: 'file',
    backgroundColor: getThemeColor(),
    text: 'Files'
  },
  {
    icon: 'gamepad',
    backgroundColor: getThemeColor(),
    text: 'Games'
  }
];

MediaItemList.propTypes = {
  iconList: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      backgroundColor: PropTypes.string,
      text: PropTypes.string
    })
  )
};

MediaItemList.defaultProps = {
  iconList: defaultListItem
};

export default MediaItemList;
