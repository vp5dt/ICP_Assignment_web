package rashmi.umkc.edu.insertcalendarevent;

import android.app.Activity;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.widget.CalendarView;
import android.widget.TextView;

import com.example.insertcalendareventintent.R;

import java.text.SimpleDateFormat;
import java.util.Date;

public class calendarActivity extends AppCompatActivity {

    CalendarView simpleCalendarView;
    TextView dateView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_calendar);

        // Fetching View by Id's
        simpleCalendarView = (CalendarView) findViewById(R.id.simpleCalendarView);
        dateView = (TextView) findViewById(R.id.dateView);

        // Showing Current Date First on Page Load
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        String selectedDate = sdf.format(new Date(simpleCalendarView.getDate()));
        // Setting to text view
        dateView.setText("Date: "+selectedDate);

        // On Change of Date
        simpleCalendarView.setOnDateChangeListener(new CalendarView.OnDateChangeListener() {
            @Override
            public void onSelectedDayChange(@NonNull CalendarView view, int year, int month, int dayOfMonth) {
                // Setting TextView by Day, month, year
                dateView.setText("Date: "+dayOfMonth+"/"+month+"/"+year);
            }
        });
    }

}