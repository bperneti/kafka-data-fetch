export default function useColumns() {
    const columns =  [{  
    Header: 'ID',  
    accessor: 'id',
   }
   ,{  
    Header: 'Name',  
    accessor: 'name' ,
    }
   
   ,{  
   Header: 'Username',  
   accessor: 'username' ,
   }
   ,{  
   Header: 'Phone',  
   accessor: 'phone',
   },
   {  
    Header: 'Email',  
    accessor: 'email',
    },
    {  
      Header: 'Website',  
      accessor: 'website',
      }
];
return columns;
};