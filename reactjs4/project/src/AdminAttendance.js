import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";

export default function AdminAttendance() {
    return (
        <>
            <AdminHome />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4 className="page-title fw-bolder">Attendance Sheet</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <table className="table table-striped custom-table m-b-0 table-responsive at-tb">
                                <thead>
                                    <tr>
                                        <th>Employee Id</th>
                                        <th>Employee</th>
                                        <th>1</th>
                                        <th>2</th>
                                        <th>3</th>
                                        <th>4</th>
                                        <th>5</th>
                                        <th>6</th>
                                        <th>7</th>
                                        <th>8</th>
                                        <th>9</th>
                                        <th>10</th>
                                        <th>11</th>
                                        <th>12</th>
                                        <th>13</th>
                                        <th>14</th>
                                        <th>15</th>
                                        <th>16</th>
                                        <th>17</th>
                                        <th>18</th>
                                        <th>19</th>
                                        <th>20</th>
                                        <th>22</th>
                                        <th>23</th>
                                        <th>24</th>
                                        <th>25</th>
                                        <th>26</th>
                                        <th>27</th>
                                        <th>28</th>
                                        <th>29</th>
                                        <th>30</th>
                                        <th>31</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Cristina Groves</td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-times text-danger" /> </td>
                                        <td><i className="fas fa-times text-danger" /> </td>
                                        <td><i className="fas fa-times text-danger" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-times text-danger" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-times text-danger" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-times text-danger" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                        <td><i className="fas fa-check text-success" /> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}