import React from 'react';
import './App.css'; // ✨ เพิ่มบรรทัดนี้เพื่อดึง CSS มาใช้งาน
import { supabase } from './supabaseClient'; 

// ... ส่วนที่เหลือของโค้ด App.jsx ...

const App = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ฟังก์ชันดึงข้อมูลจาก Supabase
  const fetchMembers = async () => {
    try {
      setLoading(true);
      // เปลี่ยน 'members' เป็นชื่อตารางจริงของคุณใน Supabase
      const { data, error } = await supabase
        .from('members') 
        .select('*');

      if (error) throw error;
      if (data) setMembers(data);
    } catch (error) {
      console.error('Error fetching members:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // ให้ดึงข้อมูลทันทีที่เปิดหน้าเว็บ
  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Supa Lotto Dashboard</h1>
      <hr />

      <section>
        <h2>รายชื่อสมาชิก (ข้อมูลจริงจาก Database)</h2>
        {loading ? (
          <p>กำลังโหลดข้อมูล...</p>
        ) : (
          <ul>
            {members.length > 0 ? (
              members.map((m) => (
                <li key={m.id}>
                  {m.name} - {m.phone || 'ไม่มีเบอร์โทร'}
                </li>
              ))
            ) : (
              <p>ยังไม่มีข้อมูลสมาชิกในตาราง 'members'</p>
            )}
          </ul>
        )}
      </section>

      <button onClick={fetchMembers} style={{ marginTop: '10px' }}>
        กดเพื่อรีเฟรชข้อมูล
      </button>
    </div>
  );
};

export default App;
