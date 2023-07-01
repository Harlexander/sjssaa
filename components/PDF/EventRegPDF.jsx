import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 30,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    marginBottom: 10,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12,
    padding: 5,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
});

const MyDocument = () => {
  const data = [
    { name: 'John Doe', age: 30, email: 'john@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { name: 'Robert Johnson', age: 35, email: 'robert@example.com' },
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
            
        </View>
      </Page>
    </Document>
  );
};

const PDFViewerComponent = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);

export default PDFViewerComponent;
