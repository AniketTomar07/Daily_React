export default function TabButton({ children, isSelected, ...props }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
//      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
//we can use a proxy prop like ...props as a prop and spread it which will then spread all the information there is available
//so we do not need to again call onClick here but we can just directly call onClick in the examples.jsx file