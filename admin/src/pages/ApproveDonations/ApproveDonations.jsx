import React from 'react';
import styles from './ApproveDonation.module.css';
import Button from '../../components/Button/Button'; // Adjust path if needed
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Icons

const ApproveDonation = () => {
    // Mock user data (replace with actual API call)
    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            profileImg: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            company: 'Company A',
            status: 'approved',
            team: 'Team 1',
            date: '1/11/2050'
        },
        {

            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            profileImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            company: 'Company B',
            status: 'approved',
            team: 'Team 2',
            date: '1/11/2050'
        },
        {

            id: 3,
            name: 'David Lee',
            email: 'david@example.com',
            profileImg: "https://images.unsplash.com/photo-1558203728-00f45181dd84?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            company: 'Company C',
            status: 'pending',
            team: 'Team 3',
            date: '1/11/2050'
        },
        {

            id: 4,
            name: 'Emily Chen',
            email: 'emily@example.com',
            profileImg: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            company: 'Company A',
            status: 'pending',
            team: 'Team 1',
            date: '1/11/2050'
        },
        {

            id: 5,
            name: 'Robert Kim',
            email: 'robert@example.com',
            profileImg: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            company: 'Company B',
            status: 'pending',
            team: 'Team 2',
            date: '1/11/2050'
        },
        {

            id: 6,
            name: 'Sarah Wilson',
            email: 'sarah@example.com',
            profileImg: "https://images.unsplash.com/photo-1583900985737-6d0495555783?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            company: 'Company C',
            status: 'pending',
            team: 'Team 3',
            date: '1/11/2050'
        },
    ];

    return (
        <div className={styles.manageUsersPage}>
            <div className={styles.headingSection}>
                <h2 className={styles.heading}>Approve Donation</h2>
                <p className={styles.description}>Approve donation for business and charity accounts.</p>
                <div className={styles.headerButtons}>
                    <Button styleType="secondary">Button</Button>
                    <Button styleType="primary">Button</Button>
                </div>
            </div>

            <table className={styles.usersTable}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Team</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>
                                <div className={styles.userCell}>
                                    <div className={styles.userImageContainer}>
                                        <img src={user.profileImg} alt={user.name} className={styles.userImage} />
                                    </div>
                                    <div className={styles.userInfo}>
                                        <div className={styles.userName}>{user.name}</div>
                                        <div className={styles.userEmail}>{user.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{user.company}</td>
                            <td>{user.team}</td>
                            <td>{user.status}</td>
                            <td>{user.date}</td>
                            <td>
                                <a href="#" className={styles.viewLink}>View</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className={styles.pagination}>
                <Button styleType="secondary"><FaArrowLeft /> Prev</Button>
                <div className={styles.pageNumbers}>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                </div>
                <Button styleType="secondary">Next <FaArrowRight /></Button>
            </div>
        </div>
    );
};

export default ApproveDonation;