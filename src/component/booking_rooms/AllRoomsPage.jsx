import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllRoomsPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const isAdmin = false; // Assume not admin for this example

  // Sample data for rooms
  const sampleRooms = [
    {
      id: 1,
      roomPhotoUrl: 'https://images.squarespace-cdn.com/content/v1/5aadf482aa49a1d810879b88/1626698584182-YPDVH4ZANFBZSEPY7AEM/2.jpg', // Using the imported image
      roomType: 'Single Room',
      roomPrice: 50,
      roomDescription: 'Phòng đơn rộng rãi và thoải mái.',
    },
    {
      id: 2,
      roomPhotoUrl: 'https://www.travelandleisure.com/thmb/w5nJuPvqKlvAbf6sAvi7vyK4c_w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/rosewood-carlyle-presidential-suite-LUXESUITE0122-0046808a88924e57922d78c7f1d9ca60.jpg', // Static image link
      roomType: 'Suite Room',
      roomPrice: 500,
      roomDescription: 'Phòng vip với tiện nghi hiện đại.',
    },
    {
      id: 3,
      roomPhotoUrl: 'https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg', // Static image link
      roomType: 'Couple Room',
      roomPrice: 200,
      roomDescription: 'Phòng đôi với tiện nghi hiện đại.',
    },
    {
      id: 4,
      roomPhotoUrl: 'https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg', // Static image link
      roomType: 'Couple Room',
      roomPrice: 200,
      roomDescription: 'Phòng đôi với tiện nghi hiện đại.',
    },
    // You can add more rooms here.
  ];

  return (
    <div className="all-rooms-page">
      <div className="all-rooms">
        <h2>All Rooms</h2>
      </div>
    <section className="room-results">
      {sampleRooms && sampleRooms.length > 0 && (
        <div className="room-list">
          {sampleRooms.map((room) => (
            <div key={room.id} className="room-list-item">
              <img
                className="room-list-item-image"
                src={room.roomPhotoUrl}
                alt={room.roomType}
              />
              <div className="room-details">
                <h3>{room.roomType}</h3>
                <p>Price: ${room.roomPrice} / night</p>
                <p>Description: {room.roomDescription}</p>
              </div>

              <div className="book-now-div">
                {isAdmin ? (
                  <button
                    className="edit-room-button"
                    onClick={() => navigate(`/admin/edit-room/${room.id}`)} // Navigate to edit room with room ID
                  >
                    Edit Room
                  </button>
                ) : (
                  <button
                    className="book-now-button"
                    onClick={() =>
                      navigate(`/room-details-book/${room.id}`)
                    } // Navigate to book room with room ID
                  >
                    View/Book Now
                  </button>
                )}
              </div>
            </div>
          ))
          }
        </div>
      )}
    </section>
    </div>
  );
};

export default AllRoomsPage;
